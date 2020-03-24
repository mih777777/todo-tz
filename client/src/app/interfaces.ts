export interface Todo {
    id?: string
    title: string
    description: string
    category: string
    created_date: string
    completed: boolean
    expired: boolean
}

export interface TodoComplete {
    id?: string
    completed: boolean
}