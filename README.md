# Create Email Templates

### Installation

```bash 
npx degit fullstackondemand/email.mjml <folder_name>
```
after clone native folder
```bash 
cd <folder_name>
npm install
```

### Used Packages

> `node.js`, `mjml`, `gulp`

## Folder Structure

```
├─── src
│     ├─── components                              # include files folder
│     │      └─── head.mjml                        # head file
│     │
│     ├─── [slug].mjml                              # url page file
│     └───index.mjml                               # home page file 
│
├─── robots.txt                                    # google file
└─── README.md 
```

### Get Started Command :-

1. `npm run gulp` for start **default**.
2. `npm run build` for start **production**.
3. `npm run dev` for start **watch**.