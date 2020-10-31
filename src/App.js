import React, { useState } from "react";
import {
  Card,
  Tabs,
  Table,
  Tag,
  Select,
  Badge,
  Descriptions,
  Menu,
  Avatar,
  Popover,
  Drawer,
  Button,
} from "antd";
import "antd/dist/antd.css";
import {
  Icon,
  DashboardTwoTone,
  DeleteTwoTone,
  ApiTwoTone,
  SafetyCertificateTwoTone,
  FireTwoTone,
  CloudTwoTone,
  ControlTwoTone,
  DownOutlined
} from "@ant-design/icons";
import {
  Water,
  Gas,
  Trash,
  Stove,
  OutdoorSpace,
  Dishwasher,
  Wifi,
  Parking,
  Electricity,
  Washer,
  Fridge
} from "./icons";

const { TabPane } = Tabs;
const { Meta } = Card;

function callback(key) {
  console.log(key);
}

///Icon components assigned variables

const washerIcon = <Washer />;
const trashIcon = <Trash />;
const gasIcon = <Gas />;
const electricityIcon = <Electricity />;
const waterIcon = <Water />;
const parkingIcon = <Parking />;
const dishwasherIcon = <Dishwasher />;
const outdoorSpaceIcon = <OutdoorSpace />;
const wifiIcon = <Wifi />;
const stoveIcon = <Stove />;
const fridgeIcon = <Fridge />;

//Lease Summary

export const LeaseSummary = ({ selectedLease }) => (
  <Tabs
    tabBarStyle={{ color: "#35657d", onHover: "#fff" }}
    centered
    className="tabsContainer"
    defaultActiveKey="1"
    onChange={callback}
  >
    <TabPane tab="Summary" key="1">
      <SummaryContent selectedLease={selectedLease} />
    </TabPane>
    <TabPane tab="Payments" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tenants" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Inventory Checklist" key="4">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

const gridStyle = {
  width: "25%",
  textAlign: "center",
  fontSize: "32px",
  outline: "none"
};

const SummaryContent = ({ selectedLease }) => {
  //Assign image to each included utility from  data

  const arrUtilities = selectedLease.utilitiesIncluded;
  const utilitiesList = arrUtilities.map((utility) => {
    switch (utility) {
      case "Trash":
        return [utility, trashIcon];
      case "Water":
        return [utility, waterIcon];
      case "Electricity":
        return [utility, electricityIcon];
      default:
        console.log("No utilities included");
    }
  });
  //Convert utility images to grid

  const utilitiesIconGrid = utilitiesList.map((utility) => (
    <Popover content={utility[0]}>
      <Card.Grid style={gridStyle}>{utility[1]}</Card.Grid>
    </Popover>
  ));

  //Assign image to each included amenity from  data

  const arrAmenities = selectedLease.amenitiesIncluded;
  const amenitiesList = arrAmenities.map((amenity) => {
    switch (amenity) {
      case "Outdoor Space":
        return [amenity, outdoorSpaceIcon];
      case "Parking":
        return [amenity, parkingIcon];
      case "In-Unit Laundry":
        return [amenity, washerIcon];
      default:
        console.log("No amenities included");
    }
  });
  //Convert amenities images to grid

  const amenitiesIconGrid = amenitiesList.map((amenity) => (
    <Popover content={amenity[0]}>
      <Card.Grid bordered={false} style={gridStyle}>
        {amenity[1]}
      </Card.Grid>
    </Popover>
  ));

  //Assign image to each included appliance from  data
  const arrAppliances = selectedLease.appliancesIncluded;
  const appliancesList = arrAppliances.map((appliance) => {
    switch (appliance) {
      case "Stove":
        return [appliance, stoveIcon];
      case "Dishwasher":
        return [appliance, dishwasherIcon];
      case "Refridgerator":
        return [appliance, fridgeIcon];
      default:
        console.log("No appliances included");
        return []
    }
  });
  //Convert appliance images to grid

  const appliancesIconGrid = appliancesList.map((appliance) => {
    const [popoverText, icon] = appliance
    return <Popover content={popoverText}>
      <Card.Grid style={gridStyle}>{icon}</Card.Grid>
    </Popover>
  });

  return (
    <Card bordered={false}>
      <Card type="inner" title="Key Terms">
        <KeyTerms selectedLease={selectedLease} />
      </Card>
      <Card style={{ marginTop: 16 }} type="inner" title="Utilities Included">
        {utilitiesIconGrid}
      </Card>
      <Card style={{ marginTop: 16 }} type="inner" title="Appliances Included">
        {appliancesIconGrid}
      </Card>
      <Card style={{ marginTop: 16 }} type="inner" title="Amenities Included">
        {amenitiesIconGrid}
      </Card>
    </Card>
  );
};

//Tenant Information Data
const columns = [
  {
    title: "End Date",
    dataIndex: "end_date",
    key: "end_date"
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    key: "start_date"
  },
  {
    title: "Rent Payment",
    dataIndex: "rent_price",
    key: "rent_price"
  },
  {
    title: "Term",
    dataIndex: "term",
    key: "term"
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color;
          if (tag === "active") {
            color = "green";
          } else {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  }
];

//Key Terms
const KeyTerms = ({ selectedLease }) => (
  <Descriptions bordered>
    <Descriptions.Item class="test" label="Status" span={3}>
      <Badge
        size="large"
        color={selectedLease.isActive ? "green" : "volcano"}
        status={selectedLease.isActive ? "processing" : "Expired"}
        style={{ fontWeight: 600 }}
        text={selectedLease.isActive ? "Active" : "Expired"}
      />
    </Descriptions.Item>
    <Descriptions.Item label="Monthly Rental Amount" span={3}>
      ${selectedLease.rentAmount}
    </Descriptions.Item>
    <Descriptions.Item label="Start Date" span={2}>
      {selectedLease.startDate}
    </Descriptions.Item>
    <Descriptions.Item label="End Date" span={2}>
      {selectedLease.endDate}
    </Descriptions.Item>
    <Descriptions.Item label="Lease Term" span={2}>
      {selectedLease.leaseTerm}
    </Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal" span={2}>
      {selectedLease.allowRenewal ? "Yes" : "No"}
    </Descriptions.Item>
    <Descriptions.Item label="Secutity Deposit?" span={2}>
      {selectedLease.securityDepositAmount ? "Yes" : "No"}
    </Descriptions.Item>
    <Descriptions.Item label="Deposit Amount" span={2}>
      ${selectedLease.securityDepositAmount}
    </Descriptions.Item>
    <Descriptions.Item label="Pets Allowed?" span={2}>
      {selectedLease.petsAllowed ? "Yes" : "No"}
    </Descriptions.Item>
    <Descriptions.Item label="Type" span={2}>
      {selectedLease.petTypesAllowed ? selectedLease.petTypesAllowed : "N/A"}
    </Descriptions.Item>
  </Descriptions>
);

export const Test = () => {

return (
<Menu>
Hi 
</Menu>
)
}

export const sideMenuDrawer = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    return (
      <div>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
        )
        }