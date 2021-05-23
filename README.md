# 我的餐廳

一個使用 Express.js 打造的餐廳清單，搭配CRUD功能


## 環境建置與需求

- Node.js v14.15.3
- Express v4.17.1
- Express-handlebars v5.2.0
- Nodemon 2.0.7
- Mongoose 5.12.3
- Body-parser 1.19.0
- @popperjs/core 2.6.0

### Installing - 專案安裝流程

1.打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/DaisyChen-TW/My_restaurant_CRUD.git
```

2.開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd My_restaurant_CRUD
```

3.安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4.安裝 nodemon 套件

```
在 Terminal 輸入 nodemon app.js 指令
```

5.啟動伺服器，執行 app.js 檔案，可直接輸入指令：npm run dev

```
當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
The Express server is running on http://localhost:3000
```

End with an example of getting some data out of the system or using it for a little demo

## Features - 功能描述

- 使用者可以瀏覽所有的餐廳
- 使用者可以新增餐廳
- 使用者可以點擊任一家餐廳，查看更多餐廳資訊
- 使用者可以編輯餐廳資訊
- 使用者可以刪除餐廳
