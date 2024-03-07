const entry = import('./entry.mjs');
export const handle = async (req, res) => (await entry).handler(req, res)