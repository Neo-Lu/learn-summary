# Node开发——Sequelize-auto 快速生成数据库实体工具

sequelize-auto 是一个快速生成实体的工具。github地址为：[查看详细](https://github.com/sequelize/sequelize-auto)

安装命令：

```powershell
npm install -g sequelize-auto
```

### 请确保安装前已经安装数据库：

mysql数据库安装命令：

```powershell
npm install -g mysql
```

Postgres数据库安装命令：

```powershell
npm install -g pg pg-hstore
```

Sqlite3数据库安装命令：

```powershell
npm install -g sqlite
```

MSSQL数据库安装命令：

```powershell
npm install -g tedious
```

用法：

````
[node] sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName] -C

Options:
  -h, --host        IP/Hostname for the database.   [required]
  -d, --database    Database name.                  [required]
  -u, --user        Username for database.
  -x, --pass        Password for database.
  -p, --port        Port number for database.
  -c, --config      JSON file for Sequelize's constructor "options" flag object as defined here: https://sequelize.readthedocs.org/en/latest/api/sequelize/
  -o, --output      What directory to place the models.
  -e, --dialect     The dialect/engine that you're using: postgres, mysql, sqlite
  -a, --additional  Path to a json file containing model definitions (for all tables) which are to be defined within a model's configuration parameter. For more info: https://sequelize.readthedocs.org/en/latest/docs/models-definition/#configuration
  -t, --tables      Comma-separated names of tables to import
  -C, --camel       Use camel case to name models and fields
````



生成数据库实体命令

```
sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres
```



```
sequelize-auto -o "./models" -d easecom_sms -h 192.168.199.101 -u root -p 3306 -x heihei -e mysql
```



