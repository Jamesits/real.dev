FROM debian:buster-slim
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y \
    && apt-get install -y netcat \
    && rm -rf /var/lib/apt/lists/*
COPY server.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/*

ENTRYPOINT [ "/usr/local/bin/server.sh" ]
