import * as chakra from "@chakra-ui/react";
import NextLink from "next/link";

function Link({ href, ...props }: chakra.LinkProps) {
    return (
        <NextLink href={href || "#"} passHref>
            <chakra.Link {...props} />
        </NextLink>
    );
}

export default Link;