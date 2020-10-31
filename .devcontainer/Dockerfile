FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:12

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN mkdir -p /Ito-ocashi-review/node_modules
RUN mkdir -p /Ito-ocashi-review/.next

# [Optional] Update UID/GID if needed
RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then \
        groupmod --gid $USER_GID $USERNAME \
        && usermod --uid $USER_UID --gid $USER_GID $USERNAME; \
    fi
RUN chown -R $USER_UID:$USER_GID /home/$USERNAME /Ito-ocashi-review;