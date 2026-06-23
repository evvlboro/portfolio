export const socialLinksStyles = {
  social: "flex items-center gap-3",
  link: "flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-all hover:-translate-y-px [&_img]:h-[1.125rem] [&_img]:w-[1.125rem] [&_img]:object-cover [&_svg]:h-[1.125rem] [&_svg]:w-[1.125rem]",
  linkLarge: "h-11 w-11 [&_img]:h-5 [&_img]:w-5 [&_svg]:h-5 [&_svg]:w-5",
  linkGithub: "text-[#181717] hover:border-[#181717]/50 hover:bg-[#f6f8fa]",
  linkLinkedin: "text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#e8f4fc]",
  linkTelegram: "text-[#26A5E4] hover:border-[#26A5E4]/50 hover:bg-[#e8f7fd]",
  linkImage: "hover:border-primary hover:bg-primary-light",
};

export const socialIconLinkStyles = {
  github: socialLinksStyles.linkGithub,
  linkedin: socialLinksStyles.linkLinkedin,
  telegram: socialLinksStyles.linkTelegram,
  hh: socialLinksStyles.linkImage,
  rabota: socialLinksStyles.linkImage,
} as const;
