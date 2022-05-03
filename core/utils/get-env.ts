export const getRequiredEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable not found: ${key}`);
  }

  return value;
};
