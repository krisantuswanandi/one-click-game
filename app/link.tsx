import NextLink from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: Props) {
  return (
    <NextLink
      href={href}
      className="bg-gray-100 px-4 py-2 rounded-md text-gray-900 hover:bg-gray-200"
    >
      {children}
    </NextLink>
  );
}
