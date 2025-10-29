import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.jsm.orderD",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: '68eddc4a00361c42ce82',
    userCollectionId: "68ef041c0019d5621fe1"
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!)
    .setPlatform(appwriteConfig.platform)

export const account = new Account(client);
export const database = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount: any = await account.create(ID.unique(), email, password, name)
        if (!newAccount)
            throw Error;

        await signIn({ email, password });
    } catch (err) {
        throw new Error(err as string);
    }
}

export const signIn = async ({ email, password }: SignInParams) => { }