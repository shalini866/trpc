import {t} from "./context"

export const appRouter = t.router({
    hello: t.procedure.query(async ({ctx}): Promise<string> => {
        return `Hello! testHeader: ${ctx.test}`;
    })
});

export type AppRouter = typeof appRouter 