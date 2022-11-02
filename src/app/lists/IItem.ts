export interface IItem {
    id: string,
    content: string,
    seconds: number;
    isActive: boolean,
    isFinished: boolean,
    percentage: number,
    total: number;
}