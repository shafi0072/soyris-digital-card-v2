import { userContext } from '@/src/Storage/ContextApi';
import React from 'react';
import Phone from './Phone';
import { Container, Draggable } from "react-smooth-dnd";
import { useContext } from 'react';

const Content2 = () => {
    const {newFeilds,setNewFeilds} = useContext(userContext)

    const onDrop = (dropResult) => {
        if (!dropResult.removedIndex && !dropResult.addedIndex) return;
    
        const fields = [...newFeilds];
        const [removed] = fields.splice(dropResult.removedIndex, 1);
        fields.splice(dropResult.addedIndex, 0, removed);
    
        setNewFeilds(fields);
      };

      

      return (
        <>
          <div className="border-dotted border-2 bg-gray-200  border-sky-500 p-5 rounded-lg">
            {/* <Container onDrop={onDrop}>
              {userCardData?.fields?.Phone?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Phone
                      items={items}
                      index={index}
                      handlePhoneInputChange={handlePhoneInputChange}
                      phoneData={phoneData}
                      setPhoneData={setPhoneData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.website?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Website
                      items={items}
                      index={index}
                      handleWebsiteInputChange={handleWebsiteInputChange}
                      websiteData={websiteData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.address?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Address
                      items={items}
                      index={index}
                      handleAddressInputChange={handleAddressInputChange}
                      addressData={addressData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.email?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Email
                      items={items}
                      index={index}
                      handleEmailInputChange={handleEmailInputChange}
                      emailData={emailData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.link?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Link
                      items={items}
                      index={index}
                      handleLinkInputChange={handleLinkInputChange}
                      linkData={linkData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.header?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Header
                      items={items}
                      index={index}
                      handleHeaderInputChange={handleHeaderInputChange}
                      headerData={headerData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.whatsApp?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <WhatsApp
                      items={items}
                      index={index}
                      handleWhatsAppInputChange={handleWhatsAppInputChange}
                      whatsAppData={whatsAppData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.viber?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Viber
                      items={items}
                      index={index}
                      handleViberInputChange={handleViberInputChange}
                      viberData={viberData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.skype?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Skype
                      items={items}
                      index={index}
                      handleSkypeInputChange={handleSkypeInputChange}
                      skypeData={skypeData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.snapchat?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Snapchat
                      items={items}
                      index={index}
                      handleSnapChatInputChange={handleSnapChatInputChange}
                      snapChatData={snapChatData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.signal?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Signal
                      items={items}
                      index={index}
                      handleSignalInputChange={handleSignalInputChange}
                      signalData={signalData}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.telegram?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Telegram
                      items={items}
                      index={index}
                      handleTelegramInputChange={handleTelegramInputChange}
                      telegramData={telegramData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.discord?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Discord
                      items={items}
                      index={index}
                      handleDiscordInputChange={handleDiscordInputChange}
                      discordData={discordData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.slack?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Slack
                      items={items}
                      index={index}
                      handleSlackInputChange={handleSlackInputChange}
                      slackData={slackData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.facebook?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Facebook
                      items={items}
                      index={index}
                      handleFacebookInputChange={handleFacebookInputChange}
                      facebookData={facebookData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.instagram?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Instagram
                      items={items}
                      index={index}
                      handleInstagramInputChange={handleInstagramInputChange}
                      instagramData={instagramData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.twitter?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Twitter
                      items={items}
                      index={index}
                      handleTwitterInputChange={handleTwitterInputChange}
                      twitterData={twitterData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.linkedIn?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <LinkedIn
                      items={items}
                      index={index}
                      handleLinkedinInputChange={handleLinkedinInputChange}
                      linkedinData={linkedinData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.pinterest?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Pinterest
                      items={items}
                      index={index}
                      handlePinterestInputChange={handlePinterestInputChange}
                      pinterestData={pinterestData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.tikTok?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <TikTok
                      items={items}
                      index={index}
                      handleTiktokInputChange={handleTiktokInputChange}
                      tiktokData={tiktokData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.youTube?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <YouTube
                      items={items}
                      index={index}
                      handleYoutubeInputChange={handleYoutubeInputChange}
                      youtubeData={youtubeData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.vimeo?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Vimeo
                      items={items}
                      index={index}
                      handleVimeoInputChange={handleVimeoInputChange}
                      vimeoData={vimeoData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.wistia?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Wistia
                      items={items}
                      index={index}
                      handleWistiaInputChange={handleWistiaInputChange}
                      wistiaData={wistiaData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.pdf?.length > 0 && (
                <Draggable>
                  <div className="mb-2">
                    <PDF
                      items={userCardData?.fields?.pdf}
                      // index={index}
                      pdf={pdf}
                      setPdf={setPdf}
                      from={true}
                      userData={userData}
                    />
                  </div>
                </Draggable>
              )}
    
              {userCardData?.fields?.notes?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Notes
                      items={items}
                      index={index}
                      handleNoteInputChange={handleNoteInputChange}
                      noteData={noteData}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.image?.length > 0 && (
                <Draggable>
                  <div className="mb-2">
                    <Image
                      setImage={setImage}
                      image={image}
                      items={userCardData?.fields?.image}
                      from={true}
                      align={align}
                      setAlign={setAlign}
                      imageWidth={imageWidth}
                      setImageWidth={setImageWidth}
                    />
                  </div>
                </Draggable>
              )}
              {userCardData?.fields?.galary?.length > 0 && (
                <Draggable>
                  <div className="mb-2">
                    <Gallery
                      setGalary={setGalary}
                      galary={galary}
                      items={userCardData?.fields?.galary[0]}
                      from={true}
                    />
                  </div>
                </Draggable>
              )}
              {userCardData?.fields?.QR?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <QR
                      index={index}
                      handleQRInputChange={handleQRInputChange}
                      qrData={qrData}
                      items={items}
                      from={true}
                      qrAlign={qrAlign}
                      setQrAlign={setQrAlign}
                      qrWidth={qrWidth}
                      setQrWidth={setQrWidth}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.divider?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Divider
                      index={index}
                      handleDriverInputChange={handleDriverInputChange}
                      driverData={driverData}
                      items={items}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
              {userCardData?.fields?.dateData?.map((items, index) => (
                <Draggable key={items}>
                  <div className="mb-2">
                    <Date
                      index={index}
                      handleDateInputChange={handleDateInputChange}
                      dateData={dateData}
                      items={items}
                      from={true}
                    />
                  </div>
                </Draggable>
              ))}
            </Container> */}
    
            <Container onDrop={onDrop}>
              {newFeilds.map((items, index) => (
                <Draggable key={index}>
                  {items?.type === "Phone" && (
                    <div className="mb-2">
                      <Phone
                        index={index}
                        // handlePhoneInputChange={handlePhoneInputChange}
                        // phoneData={phoneData}
                      />
                    </div>
                  )}
                  {/* {items === "Website" && (
                    <div className="mb-2">
                      <Website
                        index={index}
                        handleWebsiteInputChange={handleWebsiteInputChange}
                        websiteData={websiteData}
                      />
                    </div>
                  )}
                  {items === "Address" && (
                    <div className="mb-2">
                      <Address
                        index={index}
                        handleAddressInputChange={handleAddressInputChange}
                        addressData={addressData}
                      />
                    </div>
                  )}
                  {items === "Email" && (
                    <div className="mb-2">
                      <Email
                        index={index}
                        handleEmailInputChange={handleEmailInputChange}
                        emailData={emailData}
                      />
                    </div>
                  )}
                  {items === "Link" && (
                    <div className="mb-2">
                      <Link
                        index={index}
                        handleLinkInputChange={handleLinkInputChange}
                        linkData={linkData}
                      />
                    </div>
                  )}
                  {items === "Header" && (
                    <div className="mb-2">
                      <Header
                        index={index}
                        handleHeaderInputChange={handleHeaderInputChange}
                        headerData={headerData}
                      />
                    </div>
                  )}
                  {items === "WhatsApp" && (
                    <div className="mb-2">
                      <WhatsApp
                        index={index}
                        handleWhatsAppInputChange={handleWhatsAppInputChange}
                        whatsAppData={whatsAppData}
                      />
                    </div>
                  )}
                  {items === "Viber" && (
                    <div className="mb-2">
                      <Viber
                        index={index}
                        handleViberInputChange={handleViberInputChange}
                        viberData={viberData}
                      />
                    </div>
                  )}
                  {items === "Skype" && (
                    <div className="mb-2">
                      <Skype
                        index={index}
                        handleSkypeInputChange={handleSkypeInputChange}
                        skypeData={skypeData}
                      />
                    </div>
                  )}
                  {items === "Snapchat" && (
                    <div className="mb-2">
                      <Snapchat
                        index={index}
                        handleSnapChatInputChange={handleSnapChatInputChange}
                        snapChatData={snapChatData}
                      />
                    </div>
                  )}
                  {items === "Signal" && (
                    <div className="mb-2">
                      <Signal
                        index={index}
                        handleSignalInputChange={handleSignalInputChange}
                        signalData={signalData}
                      />
                    </div>
                  )}
                  {items === "Telegram" && (
                    <div className="mb-2">
                      <Telegram
                        index={index}
                        handleTelegramInputChange={handleTelegramInputChange}
                        telegramData={telegramData}
                      />
                    </div>
                  )}
                  {items === "Discord" && (
                    <div className="mb-2">
                      <Discord
                        index={index}
                        handleDiscordInputChange={handleDiscordInputChange}
                        discordData={discordData}
                      />
                    </div>
                  )}
                  {items === "Slack" && (
                    <div className="mb-2">
                      <Slack
                        index={index}
                        handleSlackInputChange={handleSlackInputChange}
                        slackData={slackData}
                      />
                    </div>
                  )}
                  {items === "Facebook" && (
                    <div className="mb-2">
                      <Facebook
                        index={index}
                        handleFacebookInputChange={handleFacebookInputChange}
                        facebookData={facebookData}
                      />
                    </div>
                  )}
                  {items === "Instagram" && (
                    <div className="mb-2">
                      <Instagram
                        index={index}
                        handleInstagramInputChange={handleInstagramInputChange}
                        instagramData={instagramData}
                      />
                    </div>
                  )}
                  {items === "Twitter" && (
                    <div className="mb-2">
                      <Twitter
                        index={index}
                        handleTwitterInputChange={handleTwitterInputChange}
                        twitterData={twitterData}
                      />
                    </div>
                  )}
                  {items === "LinkedIn" && (
                    <div className="mb-2">
                      <LinkedIn
                        index={index}
                        handleLinkedinInputChange={handleLinkedinInputChange}
                        linkedinData={linkedinData}
                      />
                    </div>
                  )}
                  {items === "Pinterest" && (
                    <div className="mb-2">
                      <Pinterest
                        index={index}
                        handlePinterestInputChange={handlePinterestInputChange}
                        pinterestData={pinterestData}
                      />
                    </div>
                  )}
    
                  {items === "Tiktok" && (
                    <div className="mb-2">
                      <TikTok
                        index={index}
                        handleTiktokInputChange={handleTiktokInputChange}
                        tiktokData={tiktokData}
                      />
                    </div>
                  )}
                  {items === "Image" && (
                    <div className="mb-2">
                      <Image
                        setImage={setImage}
                        image={image}
                        align={align}
                        setAlign={setAlign}
                        imageWidth={imageWidth}
                        setImageWidth={setImageWidth}
                      />
                    </div>
                  )}
                  {items === "Gallery" && (
                    <div className="mb-2">
                      <Gallery setGalary={setGalary} galary={galary} />
                    </div>
                  )}
                  {items === "Youtube" && (
                    <div className="mb-2">
                      <YouTube
                        index={index}
                        handleYoutubeInputChange={handleYoutubeInputChange}
                        youtubeData={youtubeData}
                      />
                    </div>
                  )}
                  {items === "Vimeo" && (
                    <div className="mb-2">
                      <Vimeo
                        index={index}
                        handleVimeoInputChange={handleVimeoInputChange}
                        vimeoData={vimeoData}
                      />
                    </div>
                  )}
                  {items === "Wistia" && (
                    <div className="mb-2">
                      <Wistia
                        index={index}
                        handleWistiaInputChange={handleWistiaInputChange}
                        wistiaData={wistiaData}
                      />
                    </div>
                  )}
                  {items === "PDF" && (
                    <div className="mb-2">
                      <PDF pdf={pdf} setPdf={setPdf} userData={userData} />
                    </div>
                  )}
                  {items === "Notes" && (
                    <div className="mb-2">
                      <Notes
                        index={index}
                        handleNoteInputChange={handleNoteInputChange}
                        noteData={noteData}
                      />
                    </div>
                  )}
                  {items === "Date" && (
                    <div className="mb-2">
                      <Date
                        index={index}
                        handleDateInputChange={handleDateInputChange}
                        dateData={dateData}
                      />
                    </div>
                  )}
                  {items === "URL" && (
                    <div className="mb-2">
                      <QR
                        index={index}
                        handleQRInputChange={handleQRInputChange}
                        qrData={qrData}
                        qrAlign={qrAlign}
                        setQrAlign={setQrAlign}
                        qrWidth={qrWidth}
                        setQrWidth={setQrWidth}
                      />
                    </div>
                  )}
                  {items === "Divider" && (
                    <div className="mb-2">
                      <Divider
                        index={index}
                        handleDriverInputChange={handleDriverInputChange}
                        driverData={driverData}
                      />
                    </div>
                  )} */}
                </Draggable>
              ))}
            </Container>
          </div>
          <div className="fixed bottom-20 left-[35%]  z-50">
            <input
              type="submit"
              value="Cancel"
              className="px-5 py-1  font-medium text-lg text-black border border-[#0277B5] rounded me-5 cursor-pointer hover:bg-[#0277B5] hover:text-white transition-all duration-500"
            />
            <input
              type="submit"
            //   onClick={handleFieldsOnSubmit}
              value="Save"
              className="px-5 py-1 border border-[#0277B5] bg-[#0277B5] font-medium text-lg text-white rounded cursor-pointer hover:bg-[#0277B5]"
            />
          </div>
        </>
      );
};

export default Content2;