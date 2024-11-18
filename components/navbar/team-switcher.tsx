import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "../ui/command";
import { PlusCircleIcon } from "lucide-react";

const groups = [
    {
        label: "Personal Account",
        teams: [{ label: "Kushal Jadhav" }],
    },
    {
        label: "Team",
        teams: [
            { label: "Virat Kohli" },
            { label: "Kl Rahul" },
            { label: "Bumrah" },
        ],
    },
];

export default function TeamSwitcher() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-label="Select a team"
                    className="w-[200px] justify-between"
                >
                    <Avatar className="mr-2 h-6 w-6">
                        <AvatarImage
                            src="http://avatar.vercel.sh/kush.png"
                            alt="Avatar"
                        />
                        <AvatarFallback>KS</AvatarFallback>
                    </Avatar>
                    Kushal Jadhav
                    <CaretSortIcon />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-80">
                <Command>
                    <CommandInput placeholder="Search Team..." />
                    <CommandList>
                        <CommandEmpty>No team found.</CommandEmpty>
                        {groups.map((group) => (
                            <CommandGroup
                                key={group.label}
                                heading={group.label}
                            >
                                {group.teams.map((team) => (
                                    <CommandItem
                                        key={team.label}
                                        className="text-sm"
                                    >
                                        <Avatar className="mr-2 h-5 w-5">
                                            <AvatarImage
                                                alt={team.label}
                                                src={`http://avatar.vercel.sh/${team.label}.png`}
                                            />
                                            <AvatarFallback className="uppercase">
                                                {team.label
                                                    .split(" ")
                                                    .map((word) => word[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        {team.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                    <CommandSeparator/>
                    <CommandList>
                        <CommandGroup>
                            <CommandItem>
                                <PlusCircleIcon className="mr-2 h-5 w-5"/>
                                Create Team
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
