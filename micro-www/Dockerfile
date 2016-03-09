FROM aye0aye/micro-image:prod

# this folder must be created in the base images
ADD . /root/micro-www/

#now run set up
RUN /bin/bash /root/micro-www/setup.sh

ENTRYPOINT ["/root/micro-www/boot.sh"]
