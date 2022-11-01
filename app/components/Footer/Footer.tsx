import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Footer.module.scss";

const navItems = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explore",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/place",
  },
  {
    icon: "person_outline",
    link: "/profile",
  },
];

export default function Footer() {
  const { push, pathname } = useRouter();
  return (
    <div className={styles.footer}>
      <nav>
        {navItems.map((item) => (
          <Link href={item.link}  className={pathname === item.link ? styles.active : ""}>
            <button
              className={pathname === item.link ? styles.active : ""}
              key={item.icon}
            >
              <span className="material-icons-outlined">{item.icon}</span>
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
