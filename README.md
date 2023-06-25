# umi-qiankun-demo

npm i @ant-design/pro-cli -g

# 初始化应用
pro create main-app 
pro create sub-app 

# 安装依赖
cd main-app
yarn add @umijs/plugin-qiankun -D

cd sub-app
yarn add @umijs/plugin-qiankun -D

# 启动基座
cd main-app
yarn start

# 启动子应用
cd sub-app
yarn start

