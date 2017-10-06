@echo off 

set cmd=call aws s3 sync %~dp0..\page s3://stevielb.io/ --delete
echo %cmd%
pause
call %cmd%