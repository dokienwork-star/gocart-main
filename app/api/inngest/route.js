import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import * as functions from "@/inngest/functions";

export const dynamic = 'force-dynamic';

const handler = serve({
    client: inngest,
    functions: [
        functions.syncUserCreation,
        functions.syncUserUpdate,
        functions.syncUserDelete,
    ],
});

export const GET = handler;
export const POST = handler;
export const PUT = handler;