export interface CreateCustomerNeedProps {
    id: string
    userId: string
    city?: string
    country?: string
    region?: string
    postCode?: string
    minArea?: number
    maxArea?: number
    startDate?: string
    endDate?: string
    office?: boolean
    officeType: string[]
    warehouse?: boolean
    workshop?: boolean
    price?: number
}