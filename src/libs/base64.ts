interface IImage {
    image: unknown
}

export const convertToBase64 = async (file: File) => {
    const base64Image = await new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })

    return base64Image as string
}