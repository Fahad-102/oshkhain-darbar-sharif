"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar2 = () => {
  

  return (
    <div className="flex  justify-center gap-5 p-5 border-b-2 border-gray-200">
      <Button className="bg-green-900 text-white" aria-label="Menu" >
        হোম
      </Button>

     <Dropdown>
      <Button className="bg-green-900 text-white" aria-label="Menu" >
       <IoMdArrowDropdown /> জীবনী
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Link href={'/biography'}>
            <Label>হযরত শাহ্ সূফী আলী রজা প্রকাশ কানু শাহ্ (রহ:)
            </Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>হযরত শাহ্ সূফী রশিদ আহমদ মিয়া (রহ:)</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
     <Dropdown>
      <Button className="bg-green-900 text-white" aria-label="Menu">
        তথ্য
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
     <Dropdown>
      <Button className="bg-green-900 text-white" aria-label="Menu">
       <IoMdArrowDropdown /> ট্রাষ্ট
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>আঞ্জুমানে পাক পঞ্জতন শাহ্ আলী রজা (রহঃ) ট্রাস্ট</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
     <Dropdown>
     <Button className="bg-green-900 text-white" aria-label="Menu">
      <IoMdArrowDropdown />  প্রতিষ্ঠান
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="mashjid" textValue="New file">
            <Label> নূরে ইলাহি জামে মসজিদ</Label>
          </Dropdown.Item>
          <Dropdown.Item id="madrasha" textValue="New file">
            <Label> ওষখাইন শাহ আলী রজা (রহঃ) আলিম মাদ্রাসা</Label>
          </Dropdown.Item>
          <Dropdown.Item id="hifz" textValue="New file">
            <Label>শাহ কেয়াম উদ্দিন আউলিয়া (রহঃ) হেফজ ও এতিমখানা</Label>
          </Dropdown.Item>
          <Dropdown.Item id="nurani" textValue="New file">
            <Label>শাহ ছুফি রশিদ আহমদ (রহঃ) নূরানী একাডেমি</Label>
          </Dropdown.Item>
          <Dropdown.Item id="darse-nijami" textValue="New file">
            <Label>শাহ ছুফি রশিদ আহমদ (রহঃ) দরসে নিযামী মাদ্রাসা</Label>
          </Dropdown.Item>
          <Dropdown.Item id="research" textValue="New file">
            <Label>গবেষণাগার</Label>
          </Dropdown.Item>
          <Dropdown.Item id="khanka" textValue="New file">
            <Label>খানকায়ে পাক পঞ্জতন শাহ্ আলী (রহঃ)</Label>
          </Dropdown.Item>
          <Dropdown.Item id="mohora" textValue="New file">
            <Label>মোহরা খানকায়ে শাহ্ আলী রজা (রহঃ)
</Label>
          </Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
     <Dropdown>
      <Button className="bg-green-900 text-white" aria-label="Menu">
        বানী
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
     <Dropdown>
      <Button className="bg-green-900 text-white" aria-label="Menu">
        যোগাযোগ
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
    

    </div>
  );
};

export default Navbar2;