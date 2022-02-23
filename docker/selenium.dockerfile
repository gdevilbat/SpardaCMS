FROM selenium/standalone-chrome:latest

USER root

RUN apt update && apt upgrade -y \
    && apt install dbus-x11 libcanberra-gtk-module libcanberra-gtk3-module -y

# export LIBGL_ALWAYS_SOFTWARE=1

# Generating a universally unique ID for the Container
RUN  dbus-uuidgen > /etc/machine-id