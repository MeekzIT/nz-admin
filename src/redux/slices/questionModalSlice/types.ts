import { QuestionModalActions } from "../../../types"

export type QuestionModelType = {
    actionKey: QuestionModalActions | null
    isOpenModal: boolean
    title: string
    elemetId: number | null
}