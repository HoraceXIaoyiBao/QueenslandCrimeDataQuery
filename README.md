# Front End: React 实现的昆士兰州犯罪记录查询网页
# Back End: Express 实现的数据查询API server

### Log：

#### 4/17 Front End: login & register
#### 4/20 Front End: offences category table, search result table
#### 4/21 Front End: search with filters
#### 4/22 Front End: Data visualisation： Bar Chart and Map
#### 5/17 Back End: API server 

#### 前端功能：
昆士兰州犯罪记录查询网页，实现：
 * 用户注册登陆 
      * 检查邮箱地址
      * 登陆时发放Token，搜索数据时要求检查Token
 * Offences类别查询
      * 允许未登录查询
 * 搜索查询
      * 不允许未登录查询，发送request时需加上Token
      * 可以添加过滤器：area，gender,age,year
      * 结果可视化：条形图和地图
      
具体搜索，过滤，检查用户名密码，检查Token由后端实现

#### 后端功能：
数据查询登陆注册API，实现 end points：
 * https://localhost/api/register
      * 检查request的用户名是否存在
      * 新增用户插入数据库
 * https://localhost/api/login
      * 检查request的用户名密码是否存在
      * 登陆成功JWT发放Token
 * https://localhost/api/offences
      * 允许无Token查询
      * 返回所有的犯罪类别
 * https://localhost/api/search
      * 检查Token，不允许无Token或者非法Token查询
      * 返回各个city council在用户搜索的犯罪类别下的记录
      * 可以添加过滤器
 * Filter data
      * https://localhost/api/ages
      * https://localhost/api/areas
      * https://localhost/api/genders
      * https://localhost/api/years
      * 允许无Token查询
      * 返回所有的过滤器选项类别

## 前端功能演示：

从API 获取数据装表
Jquery tableSorter实现表头排序
显示犯罪类别：
<img src="2019-04-28 (1).png"></img>
按犯罪类别显示犯罪记录：
<img src="2019-04-28 (2).png"></img>
用Chart.js显示柱状图：
<img src="2019-04-28 (3).png"></img>
Bing Map API显示犯罪地点
<img src="2019-04-28 (4).png"></img>

# Front End： User Guide

### 5.1	 Start the application 

Use command line to get to the file directory and type npm start to start the server.
The server will run at localhost:3001 to avoid the conflict with API server, once the server is started, the default web browser will open the page http://localhost:3001/ automatically.

### 5.2	 Register and login 

On the left top of the page, the login panel is responsible for register and login.
For register, only valid email addresses are accepted, once finished register, user could login. The offence button should be available before login.
User could click the column header to sort the table.
             
### 5.3	 Search and filters

User can type the offence name into the search textbox and click “Search” button to search.
To add filters, user could use the four dropdowns below. Click the dropdown, choose a value and click the search button again, the search result with filters will be transferred into table .
To delete filters, user could swith the dropdown’s value back to the default value” None”  and search again.
User could double click the column header to sort the table.
       
### 5.4	 Chart and Map

User can type the offence name into the search textbox and click “Chart” button or “Map” button to show the visualization of the search result.
The filters are also available for the chart and map.
The pictures below show the chart and map of the search result of “Assault” with age filter, gender filter and year filter

# Back End：API Server 

## 1.	Middle ware

### 1.1 Post /api/register
This middle ware will read the email address and password in the request body, try to insert them into the database, if failed, return an error response.    

### 1.2 Post /api/login
This middle ware will read the email address and password in the request body, than try to select the record with the same email address and password in the database user table, if the length of rows is not 1, return an error response.

### 1.3 Get /api/offences
Return the data of all the offence categories in JSON, token is not required.

### 1.4 Get /api/search
Return the data of the search result of key works and filters in JSON, token is required.

### 1.5 Post /api/areas
Return the data of all the areas in JSON, token is not required. 

### 1.6 Post /api/ages
Return the data of all the ages in JSON, token is not required. 

### 1.7 Post /api/years
Return the data of all the years in JSON, token is not required.

### 1.8 Post /api/genders
Return the data of all the genders in JSON, token is not required. 

## 2.	Security 

### 2.1	 HTTPS
The server runs over HTTPS, it requires the client have the corresponding certificate. 
For current now, the default security certificate file localhost.cer., in the folder /ServerSide/sslcert, user need to import this file into the web browser before sending requirement to the server.

### 2.2	 JWT authentication
Once a user logged in, the server will generate a JSON Web Token for this user and send it back to the client side, user cannot visit the end points that not included in the list in the file /route/index.js if the user’s request does not have the corresponding JWT.
The server set status to 401 and send back message” invalid token...” if user does not have the correct token.
