import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ExportedTransactionDetails = {
  SiteName: "string"
  AccountInfo: {}
  Transactions: {}[]
}
