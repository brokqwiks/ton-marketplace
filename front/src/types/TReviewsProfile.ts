import { TProductProfile } from "./TProductProfile";

export type TReviewsProfile = {
    id: number;
    image?: string | null;
    username: string;
    mark: number;
    product: TProductProfile;
    text: string;
}