# Introduction
This is a small script to greate printouts for paper minis. 
That way all kinds of assets can be used and quickly turned a printable sheet full of cutouts.

An amazing source for assets is https://tools.2minutetabletop.com/token-editor (consider tipping them.)

# Install and Run
```sh
npm install
npm run
```

Visit `localhost:3000` to see the result.

# Use
Place pictures of minis into the asset folder.
To print the same mini multiple times, copy it in the folder (`spy1.png`, `spy2.png`,...).
Some name prefixes change the size of the mini (Default is `1in` wide, `2in` high)
* `small_` reduces height to `1.5in`. Useful for dwarves and gnomes
* `large_` increases width to `2in`

Run the server and load the page.

Use the print page function of your browser (make sure to check "print backgrounds")