export interface FindCustomerNeedsByFiltersProps {
    startDate?: Date,
    endDate?: Date,
    minPrice?:number,
    maxPrice?: number,
    minArea?:number,
    maxArea?:number
    city?: string
    region?: string
    office?: boolean
    warehouse?: boolean
    workshop?: boolean
}