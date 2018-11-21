export interface ICuration {
    active: boolean
    detailImage: ICurationImage
    endDate: number | Date
    groupId: ICurationGroup
    mainImage: ICurationImage
    startDate: number | Date
    title: string
}

interface ICurationImage {
    size: ICurationImageSize
    url: string
}

interface ICurationImageSize {
    width: number
    height: number
}

interface ICurationGroup {
    _id: string
    title: string
    description: string
}

export interface ICurationResponse {
    items: Array<ICuration>
}