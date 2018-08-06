@echo off
@title Server Console
set CLASSPATH=.;dist\*;libs\*;
java -server -Djavax.net.ssl.keyStore=filename.keystore -Djavax.net.ssl.trustStore=filename.truststore -Djavax.net.ssl.keyStorePassword=HYGEomgLOL -Djavax.net.ssl.trustStorePassword=HYGEomgLOL server.Start
pause