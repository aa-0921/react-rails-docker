import * as React from "react";
import { Image } from '@zeit-ui/react'

export function SiteImage() {
  let width: number
  return <Image
    width={540}
    height={160}
    src="http://www.deelay.me/2000/https://react.zeit-ui.co/images/custom-domains.png" />;
}
