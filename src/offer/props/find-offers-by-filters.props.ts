export interface FindOffersByFiltersProps {
    startDate?: Date,
    endDate?: Date,
    minPrice?:number,
    maxPrice?: number,
    minArea?:number,
    maxArea?:number
    tags?: string[]
    city?: string
    region?: string
    type?: string
}