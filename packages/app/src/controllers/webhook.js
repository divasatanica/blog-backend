const processWebhook = async ctx => {
    const body = ctx.request.body;
    ctx.body = "Waiting for Post...";
}

export {
    processWebhook
};