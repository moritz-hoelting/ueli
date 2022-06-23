import { Tab, TabList } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation: FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>("general");
    const navigate = useNavigate();

    useEffect(() => navigate("/"), []);

    const tabs: { url: string; label: string }[] = [
        { label: "General", url: "/" },
        { label: "Search Engine", url: "/search-engine" },
        { label: "Appearance", url: "/appearance" },
    ];

    const navigateTo = (url: string) => {
        setSelectedValue(url);
        navigate(url);
    };

    return (
        <TabList
            vertical
            selectedValue={selectedValue}
            onTabSelect={(_event, { value }) => {
                if (typeof value === "string") {
                    navigateTo(value);
                }
            }}
        >
            {tabs.map(({ label, url }, index) => (
                <Tab key={`${label}-${url}-${index}`} value={url}>
                    {label}
                </Tab>
            ))}
        </TabList>
    );
};
