const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK || "#",
  },
};

export default LocalConfig;
