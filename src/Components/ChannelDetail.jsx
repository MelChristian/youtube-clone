import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?parts=snipet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: "red", zIndex: 10, height: "300px" }} />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
