import React, { useState, useEffect, useContext } from 'react';
import './Filter.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiFilter } from 'react-icons/bi';
import { AdsBodyContaxt } from '../../../../Contaxt/AdsBodyContaxt';
import { Api } from '../../../../Api';

export default function Filter() {
  const adsbody = useContext(AdsBodyContaxt);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [category, setCat] = useState([]);
  const [loadingCat, setLoadingCat] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    cats();
  }, []);

  const cats = async () => {
    const apiadsbody = `${Api}/category`;
    const res = await fetch(apiadsbody);

    if (res.ok) {
      const data = await res.json();
      if (data) {
        setCat(data);
        setLoadingCat(false);
      }
    }
  };

  const handleCategoryClick = (item) => {
    if (adsbody.categoryapi === item.nameid) {
      adsbody.setcatapi('');
      setSelectedCategory('');
    } else {
      adsbody.setcatapi(item.nameid);
      setSelectedCategory(item.nameid);
    }
  };

  const handleSortClick = (sortOption) => {
    adsbody.setsort(sortOption);
    setSelectedSort(sortOption[0] + '-' + sortOption[1]);
  };

  return (
    <>
      <hr />
      <div>
        <Button
          className="me-2 mb-2 text-dark fs-5 border-dark border-opacity-50 bg-white"
          onClick={() => handleShow('lg-down')}
        >
          <BiFilter /> فیلترگذاری
        </Button>
        {adsbody.categoryapi !== '' ? (
          <Button
            className="me-2 mb-2 text-dark fs-5 border-dark border-opacity-50 bg-white"
            onClick={() => {
              adsbody.setcatapi('');
              setSelectedCategory('');
            }}
          >
            حذف فیلتر
          </Button>
        ) : null}
      </div>
      <hr />

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>فیلترگذاری</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>انتخاب دسته بندی</p>
          <hr />
          <li
            onClick={() => {
              adsbody.setcatapi('');
              setSelectedCategory('');
            }}
            className={selectedCategory === '' ? 'selected' : ''}
          >
            همه دسته بندی ها
          </li>
          {loadingCat === false &&
            category.map((item) => (
              <li
                key={item.nameid}
                className={selectedCategory === item.nameid ? 'selected selectcat' : 'selectcat'}
                onClick={() => handleCategoryClick(item)}
              >
                {item.name}
              </li>
            ))}
          <hr />
          <p>مرتب سازی</p>
          <hr />
          <li
            onClick={() => handleSortClick(['price', 'asc'])}
            className={selectedSort === 'price-asc' ? 'selected selectcat' : 'selectcat'}
          >
            ارزانترین
          </li>
          <li
            onClick={() => handleSortClick(['price', 'desc'])}
            className={selectedSort === 'price-desc' ? 'selected selectcat' : 'selectcat'}
          >
            گرانترین
          </li>
          <li
            onClick={() => handleSortClick(['id', 'desc'])}
            className={selectedSort === 'id-desc' ? 'selected selectcat' : 'selectcat'}
          >
            جدیدترین
          </li>
        </Modal.Body>
      </Modal>
    </>
  );
}
