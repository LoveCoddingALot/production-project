import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher"

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid={"sidebar"}
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className!])}
        >
            {/* <button data-testid={"sidebar-toggle"} onClick={onToggle}>toggle</button> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
