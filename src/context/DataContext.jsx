import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(`# Welcome to my React Markdown Previewer!
## This is a sub-heading...

### And here's some other cool stuff:

This is an [example link](http://example.com/).

I strongly recommend against using any \`<blink>\` tags.

If you want your page to validate under XHTML 1.0 Strict,
you've got to put paragraph tags in your blockquotes:

    <blockquote>
        <p>For example.</p>
    </blockquote>

*   Candy.
*   Gum.
*   Booze.
    
> This is a blockquote.
>

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Use two asterisks for **strong emphasis**.
`);

    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    )
};

