import React, { useState } from "react";
import "./styles.scss";
import {
  Layout,
  Menu,
  Breadcrumb,
  Space,
  Avatar,
  Typography,
  Select,
  Badge
} from "antd";
import {
  UserOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
  FileTextOutlined
} from "@ant-design/icons";
import { LeaseSummary, Test, sideMenuDrawer} from "./App";
import { mockLeases } from "./mockleases";

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const { Title } = Typography;

//how do i target the dropdown menu to change its color

export const SiteLayout = () => {
  const [selectedLease, setSelectedLease] = useState(mockLeases[0]);

  const {
    address: { street, city, state, zip }
  } = selectedLease;
  const leaseAddress = `${street} ${city}, ${state}, ${zip}`;
  return (
    <Layout>
      <Header className="header">
        <Avatar
          className="loginProfile"
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf"
          }}
        >
          AV
        </Avatar>
        <Title
          className="logo"
          level={2}
          style={{ fontWeight: 500, color: "#35657d" }}
        >
          ease
        </Title>
      </Header>
      <Layout>
      
        <Sider
          collapsible={false}
          collapsedWidth={0}
          width={200}
          className="site-layout-background"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["2"]}
            className="sideNavigation"
            style={{ color: "#35657d", height: "100%", borderRight: 0 }}
          >
            <Menu.Item  key="1">
              Account
            </Menu.Item>
            <Menu.Item key="2">
              Leases
            </Menu.Item>
            <Menu.Item key="3">
              Payments
            </Menu.Item>
            <Menu.Item  key="4">
              Referrals
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ backgroundColor: "#fafafa", padding: "0 24px 24px" }}>
          <Breadcrumb style={{ backgroundColor: "#fafafa", margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Leases</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 40,
              margin: 0,
              minHeight: 80,
              backgroundColor: "#b5cfd0"
            }}
          >
            <Title style={{fontWeight: 400}}level={2}>Leases</Title>
            <Select
              bordered={false}
              defaultValue={selectedLease.id}
              // dropdownStyle={{
              //   //doesnt work
              //   background: "yellow"
              // }}
              className="lease-selector"
              style={{
                width: 220,
                textAlign: "center",
                alignContent: "center"
              }}
              onChange={(newId) => {
                // We need to set the selected lease to the lease in
                // mock leases where the id === newId.
                const newLease = mockLeases.find(({ id }) => newId === id);
                setSelectedLease(newLease);
              }}
              size="large"
            >
              {mockLeases.map(({ id, isActive, address: { street } }) => (
                <Option value={id}>
                  {street}
                  {"   "}
                  <Badge
                    status={isActive ? "processing" : "expired"}
                    color={isActive ? "green" : "volcano"}
                  />
                </Option>
              ))}
            </Select>{" "}
          </Content>{" "}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Title level={5}>{leaseAddress}</Title>
            <LeaseSummary selectedLease={selectedLease} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
