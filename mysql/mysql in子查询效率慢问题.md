# mysql in子查询效率慢问题

今天发现一个奇葩的问题，我写了一个批量更新的sql。发现好坑爹，就10000多条数据，使用in查询，耗时2分钟都没有查出来。。

我的原始sql:

```mysql
update sms_user1_batch_content set 
success_count=1,wait_count=0

where
 create_time BETWEEN '2016-12-12' and '2016-12-13'
and success_count=0 and wait_count=1
and id in (
select content_id from sms_user1_batch_number 
where create_time BETWEEN '2016-12-12' and '2016-12-13'
 and receive_status=1 
and receive_time BETWEEN '2016-12-14 10:44' and '2016-12-14 10:45'
)
```

我发现原始sql执行2分钟以上没有结果。。。

更改后的sql:

```mysql
update sms_user1_batch_content set 
success_count=1,wait_count=0

where
 create_time BETWEEN '2016-12-12' and '2016-12-13'
and success_count=0 and wait_count=1
and id in (

select content_id from (

select content_id from sms_user1_batch_number 
where create_time BETWEEN '2016-12-12' and '2016-12-13'
 and receive_status=1 
and receive_time BETWEEN '2016-12-14 10:44' and '2016-12-14 10:45'
) a
)
```

更改后，只需要9秒就执行完成了。。。

