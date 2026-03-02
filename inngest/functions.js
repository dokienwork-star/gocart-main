import { inngest } from "./client";
import prisma from "@/lib/prisma";
export const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-creation",

    }, {
    event: 'clerk/user.created'
},
    async ({ event, step }) => {
        const { data } = event;
        await prisma.user.create({
            data: {
                id: data.id,
                name: `${data.first_name} ${data.last_name}`,
                email: data.email_addresses[0].email_address,
                image: data.image_url,
            }
        })

    }
)

export const syncUserUpdate = inngest.createFunction(
    {
        id: "sync-user-update",

    }, {
    event: 'clerk/user.updated'
},
    async ({ event, step }) => {
        const { data } = event;
        await prisma.user.update({
            where: {
                id: data.id,
            },
            data: {
                name: `${data.first_name} ${data.last_name}`,
                email: data.email_addresses[0].email_address,
                image: data.image_url,
            }
        })

    }
)

export const syncUserDelete = inngest.createFunction(
    {
        id: "sync-user-delete",

    }, {
    event: 'clerk/user.deleted'
},
    async ({ event, step }) => {
        const { data } = event;
        await prisma.user.delete({
            where: {
                id: data.id,
            },
        })

    }
) 
