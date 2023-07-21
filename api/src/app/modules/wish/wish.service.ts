import { JwtPayload } from "jsonwebtoken";
import { IWish } from "./wish.interface";
import { WishModel } from "./wish.model";
import { AuthModel } from "../auth/auth.model";
import ApiError from "../../../error/apiError";

const createWish = async (user:JwtPayload | null,  book: IWish): Promise<IWish> => {
    const contactNo = user?.contactNo;
    const isUserExist = await AuthModel.isUserExist(contactNo);
    if(!isUserExist){
        throw new ApiError(404, "User is not Found !!");
    }
    book.user = isUserExist._id
    const result = await WishModel.create(book);
    return result
};
const getUserWish = async (userId: string): Promise<IWish[] | null> => {
    const result = await WishModel.find({user:userId}).populate('book').lean();
    return result
};
const deleteUserWish = async (userId: string): Promise<IWish | null> => {
    const result = await WishModel.findOneAndDelete({user:userId});
    return result;
};

export const WishService = {
    createWish,
    getUserWish,
    deleteUserWish
}