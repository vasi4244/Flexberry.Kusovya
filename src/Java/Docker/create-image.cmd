docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kusovya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kusovya-java/app ../../..
