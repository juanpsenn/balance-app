import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";

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
      {
        title: "Configuraciones",
        icon: SettingsApplicationsIcon,
        href: "/configuracion/",
      },
    ],
  },
];
