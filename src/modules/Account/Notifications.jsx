import { useState } from "react";
import { Tab, Tabs, Container } from "react-bootstrap";
import NotificationCard from "./NotificationCard";
import { TownIcon, TrackIcon } from "../../assets/images";
import { FaEthereum } from "react-icons/fa";

const Notifications = () => {
  const [currentTab, setCurrentTab] = useState("recentActivity");

  return (
    <Container className="my-5">
      <Tabs
        id="controlled-notifications"
        activeKey={currentTab}
        className="border-0"
        onSelect={(k) => setCurrentTab(k)}
      >
        <Tab
          eventKey="recentActivity"
          title="Recent Activity"
          tabClassName="custom-tab"
        >
          <NotificationCard
            image={TrackIcon}
            mainText="You mined 320.24 Track"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="about 10 hours ago"
          />
          <NotificationCard
            image={TownIcon}
            mainText="You received 4.5934 TOWN in your inventory"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="about 10 hours ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="You mined 324.71 Track"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="about 10 hours ago"
          />
          <NotificationCard
            image={TownIcon}
            mainText="You recevied 4.613 TOWN in your inventory"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="1 day ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="You mined 331.9 Track"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="2 days ago"
          />
        </Tab>
        <Tab eventKey="purchases" title="Purchases" tabClassName="custom-tab">
          <NotificationCard
            image={TrackIcon}
            mainText="You purchased a Track Gold Membership for 0.025999 ETH"
            subText="PURCHASE"
            buttonText="FULFILED"
            buttonType="FULFILED"
            timestamp="6 months ago"
          />
          <NotificationCard
            image={TownIcon}
            mainText="You purchased a Alpha Executioner (Epic) for 1.302 ETH"
            subText="PURCHASE"
            buttonType="FULFILED"
            buttonText="FULFILED"
            timestamp="6 months ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="You purchased a Track Node License for 5.629 ETH"
            subText="PURCHASE"
            buttonType="FULFILED"
            buttonText="FULFILED"
            timestamp="6 months ago"
          />
        </Tab>
        <Tab
          eventKey="distributionRewards"
          title="Distribution Rewards"
          tabClassName="custom-tab"
        >
          <NotificationCard
            image={TrackIcon}
            mainText="You mined 320.24 Track"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="about 10 hours ago"
          />
          <NotificationCard
            image={TownIcon}
            mainText="You received 4.5934 TOWN in your inventory"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="about 10 hours ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="You mined 324.71 Track"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="about 10 hours ago"
          />
          <NotificationCard
            image={TownIcon}
            mainText="You recevied 4.613 TOWN in your inventory"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="1 day ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="You mined 331.9 Track"
            subText="DISTRIBUTION REWARD"
            buttonText="INVENTORY"
            timestamp="2 days ago"
          />
        </Tab>
        <Tab eventKey="deposits" title="Deposits" tabClassName="custom-tab">
          <NotificationCard
            Icon={FaEthereum}
            iconClassName="ethereum-icon ethereum-icon-xl me-4"
            mainText="0.073014 ETH was deposited to your inventory"
            subText="Deposit"
            buttonText="INVENTORY"
            timestamp="15 days ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="7.154 Track was deposited to your inventory"
            subText="Deposit"
            buttonText="INVENTORY"
            timestamp="about 2 months ago"
          />
          <NotificationCard
            Icon={FaEthereum}
            iconClassName="ethereum-icon ethereum-icon-xl me-4"
            mainText="0.02433 ETH was deposited to your inventory"
            subText="Deposit"
            buttonText="INVENTORY"
            timestamp="about 2 months ago"
          />
          <NotificationCard
            Icon={FaEthereum}
            iconClassName="ethereum-icon ethereum-icon-xl me-4"
            mainText="0.015781 ETH was deposited to your inventory"
            subText="Deposit"
            buttonText="INVENTORY"
            timestamp="2 months ago"
          />
          <NotificationCard
            Icon={FaEthereum}
            iconClassName="ethereum-icon ethereum-icon-xl me-4"
            mainText="0.013041 ETH was deposited to your inventory"
            subText="Deposit"
            buttonText="INVENTORY"
            timestamp="2 months ago"
          />
        </Tab>
        <Tab
          eventKey="withdrawals"
          title="Withdrawals"
          tabClassName="custom-tab"
        >
          <NotificationCard
            image={TrackIcon}
            mainText="9.486 TRACK was withdrawn from your inventory"
            subText="Withdrawals"
            buttonText="Withdrawals"
            timestamp="15 days ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="7.154 TRACK was withdrawn from your inventory"
            subText="Withdrawals"
            buttonText="Withdrawals"
            timestamp="about 2 months ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="7.154 TRACK was withdrawn from your inventory"
            subText="Deposit"
            buttonText="Withdrawals"
            timestamp="about 2 months ago"
          />
          <NotificationCard
            Icon={FaEthereum}
            iconClassName="ethereum-icon ethereum-icon-xl me-4"
            mainText="0.011834 ETH was withdrawn from your inventory"
            subText="Withdrawals"
            buttonText="Withdrawals"
            timestamp="2 months ago"
          />
          <NotificationCard
            image={TrackIcon}
            mainText="14.208 TRACK was withdrawn from your inventory"
            subText="Withdrawals"
            buttonText="Withdrawals"
            timestamp="2 months ago"
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Notifications;
