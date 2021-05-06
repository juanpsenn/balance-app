import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

export default [
  {
    subheader: "Menu",
    items: [
      {
        title: "Inicio",
        icon: HomeIcon,
        href: "/movimientos-general/",
      },
      {
        title: "Cuentas",
        icon: AccountBalanceWalletIcon,
        href: "/cuentas-general/",
      },
    ],
  },
];
