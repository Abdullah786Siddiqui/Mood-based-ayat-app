import React, { useCallback, useEffect, useRef, useState } from "react";
import Displaycharater from "../Home/displaycharater";
import MoodSelection from "../Home/MoodSelection";
import AyatDisplay from "../Home/AyatDisplay";
import { useSelector } from "react-redux";
import ModalOption from "../Home/ModalOption";

const Home = () => {
  // store se mood ke array ko acces kia
  const filteredAyat = useSelector((store) => store.Ayats.Mood);

  const [randomAyat, setRandomAyat] = useState(null);
  const [show, setShow] = useState(false);

  let getRandomAyat = useCallback(() => {
    if (filteredAyat && filteredAyat.length > 0) {
      let newAyat;
      do {
        newAyat = filteredAyat[Math.floor(Math.random() * filteredAyat.length)];
      } while (newAyat === randomAyat);
      localStorage.setItem("previousAyat", JSON.stringify(newAyat));

      setRandomAyat(newAyat);
    }
  }, [filteredAyat, randomAyat]);
  useEffect(() => {
    const savedAyat = JSON.parse(localStorage.getItem("previousAyat"));

    if (savedAyat && filteredAyat.find((ayat) => ayat.id === savedAyat.id)) {
      setRandomAyat(savedAyat);
    } else if (filteredAyat.length > 0) {
      getRandomAyat();
    }
  }, [filteredAyat]);
  // const storedAyats = localStorage.getItem("Ayats");
  // if (storedAyats) {
  //   const parsed = JSON.parse(storedAyats);
  //   console.log(parsed);
    
  // }
  // useEffect(() => {
  //   const navType = performance.getEntriesByType("navigation")[0]?.type;
  //  console.log(navType);
   
  //  if (navType === "reload") {
  //   const storedAyats = localStorage.getItem("Ayats");
  //   if (storedAyats) {
  //     const parsed = JSON.parse(storedAyats);
      
  //     // Mood ko delete karo
  //     delete parsed.Mood;
      
  //     // Dobara update karo localStorage mein bina Mood ke
  //     localStorage.setItem("Ayats", JSON.stringify(parsed));
  //   }
  // }
  
  // }, []);

  const getStartedBtn = useRef(null);

  const scrollToTarget = () => {
    if (getStartedBtn.current) {
      getStartedBtn.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const MoodSelect = useRef(null);

  const scrollToTarget2 = () => {
    if (MoodSelect.current) {
      MoodSelect.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Displaycharater scrollToTarget={scrollToTarget} />
      <MoodSelection ref={getStartedBtn} scrollToTarget2={scrollToTarget2} />
      <div ref={MoodSelect} className="pb-5"></div>

      {show ? (
        <ModalOption show={show} setShow={setShow} Ayat={randomAyat} />
      ) : null}

      {randomAyat && (
        <AyatDisplay
          ref={MoodSelect}
          Ayat={randomAyat}
          getRandomAyat={getRandomAyat}
          handleShow={handleShow}
        />
      )}

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          nesciunt accusantium a, tempora sit veritatis iste vero voluptas
          harum, nemo obcaecati animi expedita molestias nihil necessitatibus
          ducimus totam laboriosam minima? Velit necessitatibus deserunt soluta
          ipsam aperiam officiis nulla autem veritatis nisi qui perferendis,
          blanditiis eveniet eligendi aliquid illo, asperiores minus vitae
          impedit magnam quas molestiae distinctio! Corporis incidunt
          necessitatibus sed. Ipsum, quasi illo rerum sequi est iusto at
          consectetur dolorem ullam adipisci tempora doloribus ipsam voluptatum,
          sed error repellat fuga commodi fugiat delectus repudiandae porro.
          Facilis enim alias dolorum ea! Fugit dolor aperiam iure sunt sed
          dolore laborum, aliquid assumenda magni commodi et temporibus? Magnam
          animi explicabo, minima blanditiis mollitia excepturi beatae ullam
          doloribus inventore sed suscipit quaerat assumenda. Dolorum. Provident
          alias dolorem perspiciatis amet officia reiciendis blanditiis,
          corrupti beatae repellendus, repudiandae cumque a ab neque quasi,
          eveniet consectetur veniam. Minus officiis quam nesciunt cumque
          eligendi optio modi porro fugiat. Et sapiente reprehenderit ab a in
          minima illum fuga officiis aliquid, delectus laborum, hic perspiciatis
          alias nesciunt velit odio aspernatur, maxime aliquam vero natus qui
          ipsa sequi nam. Tempore, error. Expedita, illo quaerat. Doloremque
          officia quos magni, ea, aut praesentium illo recusandae deleniti
          consequatur, earum suscipit nulla magnam itaque? Tempora enim
          deserunt, facere ducimus ad fugiat impedit officia labore magni.
          Necessitatibus modi in inventore eveniet odio, non praesentium. Iure
          exercitationem odit nesciunt iusto sunt veritatis provident aut
          explicabo quae necessitatibus! Vitae praesentium eum illum nostrum rem
          explicabo odit quae dignissimos. Tempore vero, iure labore eaque
          voluptatibus maxime commodi cumque corrupti a saepe iste corporis
          dolor, veritatis amet accusamus, doloribus odio sit dolore odit rem
          reprehenderit quidem? Soluta porro consequuntur ratione. Deleniti quas
          voluptatem corporis, facere, enim ipsam animi voluptate expedita
          alias, fuga nam unde. Adipisci corporis nisi sapiente beatae
          repudiandae numquam dignissimos est labore inventore eaque
          perspiciatis sunt, unde recusandae! Magnam, porro ducimus! Eum
          incidunt reiciendis magni neque voluptates voluptatibus porro quam
          vitae debitis, totam possimus iste quisquam, rerum dolores iure
          dolorem quos obcaecati amet doloribus est velit. Assumenda,
          distinctio. Ut possimus, sapiente laudantium voluptatum reiciendis
          nisi magnam non ullam, soluta necessitatibus, doloribus in? Libero
          dolorum debitis animi incidunt veritatis nam, rem ipsa nobis vitae.
          Incidunt atque dignissimos temporibus aspernatur. Expedita assumenda
          rerum ut. Quia accusamus quidem provident pariatur velit minima
          tempora corporis amet deleniti, fuga eius est cupiditate, nobis sed
          voluptate qui rem voluptates consequatur incidunt nisi eligendi nemo.
          Dolor alias recusandae totam quaerat quidem quam animi perferendis
          quia minima corporis placeat et obcaecati velit suscipit sit, illo eum
          commodi quisquam distinctio explicabo mollitia dolores. Modi impedit
          consectetur tempora! Officiis amet nulla, impedit delectus eos quia
          eius architecto iure officia recusandae laudantium tenetur. Natus, ab
          commodi odio aperiam minima est, eius, aliquam illum perspiciatis odit
          ea assumenda nemo provident! Maiores, id. Delectus laudantium officia
          aperiam voluptate minima ipsam ullam ducimus optio repellendus nobis.
          Reprehenderit tempora facilis, iure illo quam ducimus quo vel
          veritatis repellendus eaque eos inventore aperiam ab! Veritatis, atque
          hic nemo suscipit rerum ipsum. Exercitationem, facere? Quod
          laudantium, illo velit quo animi omnis id unde dolorem odit
          consectetur? Ab, illum fugiat aperiam unde accusantium quidem in
          ratione. Commodi, iure officia consectetur ab labore laudantium enim
          quis dolor quidem distinctio recusandae magni ipsa magnam praesentium
          vero possimus accusantium fugiat eum incidunt odit laborum maiores
          tempora? Nesciunt, laborum distinctio! Fugiat, recusandae itaque totam
          nesciunt, animi, minus voluptatem eius iusto neque consequuntur ut
          corrupti illum! Sequi nostrum dolorum placeat dolor quisquam. Maxime
          aut obcaecati beatae labore odio ducimus cumque expedita? Consequuntur
          ea, a vitae magni quaerat quos voluptas, neque praesentium libero,
          nostrum dolore! Dolor est, quam fugiat doloremque saepe cupiditate
          velit consectetur asperiores sapiente nam, exercitationem voluptate,
          blanditiis sint quia. Ipsam ad impedit magnam esse inventore, ex
          corporis sit dolorem saepe reprehenderit unde atque illum quo. Soluta
          dolores ea ullam mollitia. Provident eveniet repellendus eos odio at
          possimus nihil sit! Laudantium, porro consequatur iste magni sint
          minus, quis inventore earum quaerat rerum numquam omnis incidunt amet
          pariatur aperiam nemo veniam? Beatae quas quasi excepturi maiores,
          ratione nisi reprehenderit vero nobis. Dolorum consectetur quia ipsam
          voluptatem modi quasi culpa earum esse ullam, obcaecati, sit,
          provident dignissimos aspernatur. Impedit dolores eius animi modi,
          accusantium atque totam, quo, alias ullam eligendi mollitia
          cupiditate. Fugiat omnis corporis autem repellendus praesentium quam
          vitae dignissimos illum nostrum est, inventore numquam veritatis
          consequuntur a ducimus quod. Adipisci ratione illum, vitae consectetur
          tenetur fugiat molestiae consequatur necessitatibus quas? Minima,
          ducimus aperiam inventore nemo ullam exercitationem consequatur ex
          aliquam libero tenetur iste error esse aliquid reiciendis. Nulla quae
          expedita ducimus perferendis. In obcaecati voluptatibus quis dolore
          blanditiis cum maiores. Itaque, adipisci illo in quibusdam deserunt
          consequatur numquam nulla tenetur velit eos tempore, commodi a
          pariatur error! Reprehenderit earum dignissimos labore delectus nihil
          corrupti excepturi, debitis ea vitae asperiores fugiat. Iure omnis
          accusamus recusandae eaque aspernatur, vitae voluptatem at blanditiis
          officia. Ipsam harum eligendi, voluptatem at, ullam laborum labore
          cupiditate porro dolore minima quos a libero, numquam dolorum impedit
          odit. Corporis pariatur ipsam reprehenderit laboriosam dolores officia
          unde ipsa nam delectus vel vitae, modi quos quibusdam reiciendis quas
          eius itaque, ab accusantium, sint eum nulla consequatur. Placeat
          deleniti laborum sit. Itaque perspiciatis, eius atque voluptas qui,
          odio quam repellat, sapiente tempora neque rerum? Deserunt quos iste a
          eius aut hic voluptatibus, suscipit totam eligendi doloribus
          voluptates voluptas odit dicta sit? Quis nobis, vero quibusdam
          explicabo voluptatibus ducimus in necessitatibus magnam veniam dolor
          quos accusantium non animi cum incidunt distinctio voluptate atque
          consequuntur recusandae soluta. Velit, id aliquam! Totam, placeat
          saepe! Delectus, aperiam iusto corporis enim molestias placeat
          consequuntur laboriosam, dolores excepturi itaque perferendis eligendi
          reprehenderit minima quas omnis facere soluta? Dolorum earum
          reiciendis eligendi corrupti vel alias quae qui. Maxime! Accusantium
          nihil minus sapiente dolores, minima nisi repellat aliquam doloremque
          ea quidem ipsam magni! Fugiat aliquam similique nihil vero alias
          maiores aut est tempore quis odit dolor, cum consequatur perspiciatis?
          Reiciendis, repellendus! Similique quis blanditiis consequatur
          debitis? Quia quae placeat voluptate hic quis iusto quas quo, ipsam,
          porro, fugit debitis qui illo dolorem dolore iste maiores! Accusantium
          unde quaerat iure! Itaque laborum in praesentium saepe? Aliquid
          dolores ex nostrum architecto rem eligendi inventore officia, expedita
          quia odit voluptas et veritatis temporibus nam unde id, nisi
          asperiores enim! In, dolores suscipit! Sed dignissimos consequuntur
          perspiciatis non officiis quaerat quam earum error suscipit ipsum
          eligendi ex maxime ut, dolorum odio modi doloremque cupiditate quia
          fugit asperiores voluptas nihil. Blanditiis itaque optio
          necessitatibus! Non corporis molestias quibusdam iste inventore hic
          aspernatur amet culpa veniam maiores, at veritatis optio odio,
          deleniti saepe neque tenetur nihil officiis minus maxime vero
          exercitationem iusto, iure ipsum? Dolorem! Incidunt, illo beatae
          veritatis consectetur eos magnam debitis ex dolores officia et sequi
          quibusdam ipsam totam quaerat expedita, deserunt, voluptatum
          accusantium ut nemo in rem atque tempora facere? Dolores, non?
          Laboriosam natus totam animi porro quam est corrupti rem eum illo
          soluta illum nihil omnis, corporis suscipit veritatis quasi beatae
          voluptate dolorem ratione magni, reprehenderit molestiae molestias
          eveniet. Blanditiis, deserunt. Consequatur voluptatum excepturi esse
          quaerat neque? Tenetur quaerat rem suscipit nemo impedit autem id,
          sunt quam ratione exercitationem repellat necessitatibus. Corrupti
          optio sit dolor laudantium praesentium. Voluptas optio numquam
          aliquid. Atque tempore nemo, exercitationem provident laudantium
          expedita quisquam ab! Consectetur vero pariatur perspiciatis illum
          iusto minus, accusantium fuga culpa aperiam reiciendis beatae enim
          facilis ipsa vitae dolorum doloremque eos consequatur! Blanditiis vero
          dolore totam consectetur laudantium sit accusamus doloremque cumque
          assumenda facilis sequi fuga quia iusto, libero commodi ratione
          reprehenderit vitae aperiam qui esse molestiae dolores est
          perspiciatis! Officiis, veniam. Labore, vero rem? Enim, mollitia nobis
          illum, officia nulla in nam fugit recusandae quo tempora eaque ex
          deserunt doloremque quidem earum esse quae eligendi suscipit,
          necessitatibus maxime labore? Earum, doloremque? Molestias maxime vero
          ipsam deleniti! Autem sapiente in ad tenetur illo atque, at animi
          consequuntur ea voluptates quisquam facere repellat odio quas
          accusamus. Vitae quis quas dolor eos placeat! Dignissimos. Qui unde
          atque tempore, repudiandae officia fugiat libero ullam accusamus id
          maxime provident aspernatur nisi repellat, similique incidunt eligendi
          assumenda rerum nemo ipsum. Nemo, at dignissimos! A officia veritatis
          minus. Corrupti dolor odio suscipit sed repudiandae, aliquam velit!
          Nostrum pariatur blanditiis reprehenderit, dolores quam ex aperiam ea
          repellendus labore deleniti laborum autem ducimus eum dolore earum
          eaque quo consequuntur veritatis!
        </p>
      </div>
    </>
  );
};

export default Home;
